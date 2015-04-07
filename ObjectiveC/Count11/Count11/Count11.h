//
//  Count11.h
//  Count11
//
//  Created by Davis Koh on 4/7/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>

//! Project version number for Count11.
FOUNDATION_EXPORT double Count11VersionNumber;

//! Project version string for Count11.
FOUNDATION_EXPORT const unsigned char Count11VersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <Count11/PublicHeader.h>

int (^count11)(NSString *) = ^(NSString *string) {
    NSUInteger length = [string length];
    
    if (length < 2) {
        return 0;
    }
    
    NSString *firstTwoChars = [string substringToIndex: 2];
    if ([firstTwoChars isEqualToString: @"11"]) {
        return 1 + count11([string substringWithRange:NSMakeRange(2, length - 2)]);
    }

    // though the chars 0-1 may not be "11", cannot assume that 1-2 wont be
    return count11([string substringWithRange:NSMakeRange(1, length - 1)]);
};