import axios from "axios";
import { useData } from "../Contexts";
import { ActionType } from "../DataReducer/Datareducer";
import { NoteType } from "../Types/NoteType";
import { noteHandler } from "./utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe("get user service", () => {
  
    
	test("should return user when API call is successful", async () => {
		mockedAxios.get.mockResolvedValue({ data: { name: "Tanay", age: 30 } });
		const user = await noteHandler(undefined,{
            backgroundColor: "white",
            content: "abcd",
            tag: "abc",
            tags: ["abc"],
            time: 2,
            timeCreated: "20-2-5",
            title: "title",
            _id:undefined
        },"aasd");

        expect(user).toEqual({ data: { name: "Tanay", age: 30 } });

	});

    test("should return errorMessage when API is call fails", async () => {
        mockedAxios.get.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "user not found"}}});

        mockedAxios.isAxiosError.mockImplementation((payload) => true)
        
            const user = await noteHandler(undefined,{
                backgroundColor: "white",
                content: "abcd",
                tag: "abc",
                tags: ["abc"],
                time: 2,
                timeCreated: "20-2-5",
                title: "title",
                _id:undefined
            },"aasd");
            expect(user).toEqual({ errorMessage: "user not found" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })
});