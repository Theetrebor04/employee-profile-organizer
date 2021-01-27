const { timeStamp } = require("console");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/Employee");

test("Creates new employee", () => {
    const a = new Employee();
    expect(typeof(a)).toBe("object");
});