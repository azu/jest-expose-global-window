// MIT © 2017 azu
"use strict";
test("should not defined global.window", function() {
    console.log(typeof global.window !== "undefined" ? "global.window is defined" : "No window");
    expect(global.window).toBeUndefined();
});

