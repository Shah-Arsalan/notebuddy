import axios from "axios";
import { archiveHandler, archiveRestoreHandler, deleteHandler, getInitialArchivesData, getInitialNoteData, loginCall, logoutHandler, noteHandler, signupHandler } from "./utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe("get user service", () => {
  
    
	test("should post a note", async () => {
		mockedAxios.post.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await noteHandler(undefined,{
            backgroundColor: "white",
            content: "abcd",
            tag: "abc",
            tags: ["abc"],
            time: 2,
            timeCreated: "20-2-5",
            title: "title",
            _id:undefined
        },"aasd", () => {});

  

        expect(mockvalue).toEqual( { note: "HI"} );

	});

    test("should return errorMessage when API is call fails for post note", async () => {
        mockedAxios.post.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await noteHandler(undefined,{
                backgroundColor: "white",
                content: "abcd",
                tag: "abc",
                tags: ["abc"],
                time: 2,
                timeCreated: "20-2-5",
                title: "title",
                _id:undefined
            },"aasd", () => {});
           
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })


    test("should delete a note", async () => {
		mockedAxios.delete.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await deleteHandler("aaa","aasd","aaa", () => {});

        

        expect(mockvalue).toEqual( { note: "HI"});

	});

    test("should return errorMessage when API is call fails for delete note", async () => {
        mockedAxios.delete.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await deleteHandler("aaa","aasd","aaa", () => {});
           
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })


    test("should archive a note", async () => {
		mockedAxios.post.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await archiveHandler("aaa",{
            backgroundColor: "white",
            content: "abcd",
            tag: "abc",
            tags: ["abc"],
            time: 2,
            timeCreated: "20-2-5",
            title: "title",
            _id:undefined
        },"aaa", () => {});

        

        expect(mockvalue).toEqual( { note: "HI"});

	});

    test("should return errorMessage when API call fails for archive note request", async () => {
        mockedAxios.post.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await archiveHandler("aaa",{
                backgroundColor: "white",
                content: "abcd",
                tag: "abc",
                tags: ["abc"],
                time: 2,
                timeCreated: "20-2-5",
                title: "title",
                _id:undefined
            },"aaa", () => {});
            
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })



    test("should unarchive a note", async () => {
		mockedAxios.post.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await archiveRestoreHandler("aaa","aasd", () => {});

      

        expect(mockvalue).toEqual( { note: "HI"});

	});

    test("should return errorMessage when API call fails for unarchive note request", async () => {
        mockedAxios.post.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await archiveRestoreHandler("aaa","aasd", () => {});
         
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })



    test("should login a user", async () => {
		mockedAxios.post.mockResolvedValue( {data: { username: "mockname"}} );
		const user = await loginCall("aaa","aasd", () => {} ,()=>{} , ()=>{});


        expect(user).toEqual( { username: "mockname"});

	});

    test("should return errorMessage when API call fails for login request", async () => {
        mockedAxios.post.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const user = await loginCall("aaa","aasd", () => {} ,()=>{} , ()=>{});
           
            expect(user.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })


    test("should signup a user", async () => {
		mockedAxios.post.mockResolvedValue( {data: { username: "mockname"}} );
		const user = await signupHandler("aaa","aasd","aaa","aasd", () => {} ,()=>{} , ()=>{});


        expect(user).toEqual( { username: "mockname"});

	});

    test("should return errorMessage when API call fails for signup request", async () => {
        mockedAxios.post.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const user = await signupHandler("aaa","aasd","aaa","aasd", () => {} ,()=>{} , ()=>{});
           
            expect(user.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })


    test("logs out a user", async () => {
		const mockedvalue = logoutHandler(()=>{},()=>{});
        expect(mockedvalue).toBe(2)

	});



    test("should get initial note daTA", async () => {
		mockedAxios.get.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await getInitialNoteData("aaa", () => {});


        expect(mockvalue).toEqual( { note: "HI"});

	});

    test("should return errorMessage when API call fails for initial note request", async () => {
        mockedAxios.get.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await getInitialNoteData("aaa", () => {});
           
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })


    test("should get initial archive daTA", async () => {
		mockedAxios.get.mockResolvedValue( {data: { note: "HI"}} );
		const mockvalue = await getInitialArchivesData("aaa", () => {});

        

        expect(mockvalue).toEqual( { note: "HI"});

	});

    test("should return errorMessage when API call fails for initial archive request", async () => {
        mockedAxios.get.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "call unsecessful"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const mockvalue = await getInitialArchivesData("aaa", () => {});
        
            expect(mockvalue.response.data).toEqual({ errorMessage: "call unsecessful" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })








});

