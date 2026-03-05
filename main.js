async function main() {
    /*--------------------------------------------------------------------------
                                    SETTING UP
    Javascript has the Window interface which represents the window that is
    open. To put it from the perspective of the user, this window is just the 
    "tab" the user has open. The variable window and its properties are exposed 
    as globals in javscript. One of the properties is the navigator property. 
    The navigator property contains information about the user agent (web 
    browser in most cases). This is what we use to begin to access all of 
    WebGPU's functionality. First we check to see if the current web browser 
    has WebGPU functionality.
    --------------------------------------------------------------------------*/
    if (!navigator.gpu) {
        throw Error("WebGPU is not supported.");
    }
}

main();
