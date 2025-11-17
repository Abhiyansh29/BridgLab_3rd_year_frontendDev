// Q5. Boolean Logic Access System
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    console.log(`Door:${isDoorLocked}, Window:${isWindowClosed}, Alarm:${isAlarmOn}, OwnerInside:${isOwnerInside} -> ${secure ? "Secure" : "Unsafe"}`);
    return secure;
}

// Test multiple outcomes
checkSecurity(true, true, true, true);   // all good
checkSecurity(false, true, true, true);  // door open
checkSecurity(true, false, true, true);  // window open
checkSecurity(true, true, false, true);  // alarm off
checkSecurity(true, true, true, false);  // owner not inside