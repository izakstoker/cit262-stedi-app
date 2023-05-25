import hello from "../utils/hello.js";

it("Should say hello", ()=>{
    const helloString = hello();
    console.log(helloString);
    expect(helloString).toBe("hello");
})