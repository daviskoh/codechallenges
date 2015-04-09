//
//  NumberAddition.h
//  NumberAddition
//
//  Created by Davis Koh on 4/9/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>

//! Project version number for NumberAddition.
FOUNDATION_EXPORT double NumberAdditionVersionNumber;

//! Project version string for NumberAddition.
FOUNDATION_EXPORT const unsigned char NumberAdditionVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <NumberAddition/PublicHeader.h>


int (^numberSearch)(NSString *) = ^(NSString *str) {
    if (str.length == 0) {
        return 0;
    }
    
    __block int sum = 0;

    // create regex
    NSRegularExpression *regex = [NSRegularExpression
        regularExpressionWithPattern:@"(\\d+)"
                             options:NSRegularExpressionCaseInsensitive
                               error:NULL];
    // find matches of nums
    [regex enumerateMatchesInString:str options:0 range:NSMakeRange(0, str.length) usingBlock: ^(NSTextCheckingResult *match, NSMatchingFlags flags, BOOL *stop) {
        NSString *substring = [str substringWithRange:match.range];
        sum += substring.intValue;
    }];
    
    // parse text as string
    return sum;
};