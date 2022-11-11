// import { StateType } from "Types/StateType";
import { StateType } from "../Types/StateType";
import { sortByTag, sortByDate } from "./FilterFunction";

describe("should test filter functions", () => {
  let count = 1;
  beforeEach(() => {
    console.log("Running test" , count , "/4 in FilterFunctions Suite")
  });
  
  afterEach(() => {
    console.log("Test" , count , "/4 successful in FilterFunctions Suite")
    count += 1;
  });

  test("should test tag filter when serched field is empty string", () => {
    const initialState: StateType = {
      notes: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      archives: [],
      searched: "",
      date: "",
    };

    const data = [
      {
        backgroundColor: "#FFFFFF",
        content: "zxcvxv",
        tag: "home",
        tags: [],
        time: 1666462991753,
        timeCreated: "23:53:12",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "zxcvxv",
        tag: "work",
        tags: [],
        time: 1666462991755,
        timeCreated: "23:53:13",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },
    ];

    const calcultedValue = sortByTag(initialState , data);

    const finalValue = [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "home",
          tags: [],
          time: 1666462991753,
          timeCreated: "23:53:12",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
        },
  
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "work",
          tags: [],
          time: 1666462991755,
          timeCreated: "23:53:13",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
        },
      ]


      expect(calcultedValue).toEqual(finalValue);

  });

  test("should test tag filter when serched field is not empty", () => {
    const initialState: StateType = {
      notes: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      archives: [],
      searched: "home",
      date: "",
    };

    const data = [
      {
        backgroundColor: "#FFFFFF",
        content: "efgh",
        tag: "home",
        tags: [],
        time: 1666462991753,
        timeCreated: "23:53:12",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "zxcvxv",
        tag: "work",
        tags: [],
        time: 1666462991755,
        timeCreated: "23:53:13",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "abcd",
        tag: "home",
        tags: [],
        time: 1666462991751,
        timeCreated: "23:53:13",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },
    ];

    const calcultedValue = sortByTag(initialState , data);

    const finalValue = [
        {
            backgroundColor: "#FFFFFF",
            content: "efgh",
            tag: "home",
            tags: [],
            time: 1666462991753,
            timeCreated: "23:53:12",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
          },
          {
            backgroundColor: "#FFFFFF",
            content: "abcd",
            tag: "home",
            tags: [],
            time: 1666462991751,
            timeCreated: "23:53:13",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
          },
    
        
      ]


      expect(calcultedValue).toEqual(finalValue);

  });


  test("should test date filter when date field is oldestFirst", () => {
    const initialState: StateType = {
      notes: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      archives: [],
      searched: "home",
      date: "oldestFirst",
    };

    const data = [
     

      {
        backgroundColor: "#FFFFFF",
        content: "zxcvxv",
        tag: "work",
        tags: [],
        time: 1666462991754,
        timeCreated: "23:53:11",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "efgh",
        tag: "home",
        tags: [],
        time: 1666462991755,
        timeCreated: "23:53:12",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "abcd",
        tag: "home",
        tags: [],
        time: 1666462991753,
        timeCreated: "23:53:10",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },
    ];

    const calcultedValue = sortByDate(initialState , data);

    const finalValue = [
 
        {
            backgroundColor: "#FFFFFF",
            content: "efgh",
            tag: "home",
            tags: [],
            time: 1666462991755,
            timeCreated: "23:53:12",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
          },
    
          {
            backgroundColor: "#FFFFFF",
            content: "zxcvxv",
            tag: "work",
            tags: [],
            time: 1666462991754,
            timeCreated: "23:53:11",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
          },
    
          {
            backgroundColor: "#FFFFFF",
            content: "abcd",
            tag: "home",
            tags: [],
            time: 1666462991753,
            timeCreated: "23:53:10",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
          },
    
        
      ]


      expect(calcultedValue).toEqual(finalValue);

  });


  test("should test date filter when date field is newestFirst(or not oldestfirst)", () => {
    const initialState: StateType = {
      notes: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      archives: [],
      searched: "home",
      date: "newestFirst",
    };

    const data = [
     

      {
        backgroundColor: "#FFFFFF",
        content: "zxcvxv",
        tag: "work",
        tags: [],
        time: 1666462991754,
        timeCreated: "23:53:11",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "efgh",
        tag: "home",
        tags: [],
        time: 1666462991755,
        timeCreated: "23:53:12",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
      },

      {
        backgroundColor: "#FFFFFF",
        content: "abcd",
        tag: "home",
        tags: [],
        time: 1666462991753,
        timeCreated: "23:53:10",
        title: "",
        _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
      },
    ];

    const calcultedValue = sortByDate(initialState , data);

    const finalValue = [
         
          {
            backgroundColor: "#FFFFFF",
            content: "abcd",
            tag: "home",
            tags: [],
            time: 1666462991753,
            timeCreated: "23:53:10",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
          },

          {
            backgroundColor: "#FFFFFF",
            content: "zxcvxv",
            tag: "work",
            tags: [],
            time: 1666462991754,
            timeCreated: "23:53:11",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835h",
          },

          {
            backgroundColor: "#FFFFFF",
            content: "efgh",
            tag: "home",
            tags: [],
            time: 1666462991755,
            timeCreated: "23:53:12",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835g",
          },
    
    
        
      ]


      expect(calcultedValue).toEqual(finalValue);

  });




});
