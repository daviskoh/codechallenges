//
//  StrDist.h
//  StrDist
//
//  Created by Davis Koh on 4/11/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>

//! Project version number for StrDist.
FOUNDATION_EXPORT double StrDistVersionNumber;

//! Project version string for StrDist.
FOUNDATION_EXPORT const unsigned char StrDistVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <StrDist/PublicHeader.h>


// Given a string and a non-empty substring sub, compute recursively the largest substring
// which starts and ends with sub and return its length.

// strDist("catcowcat", "cat") → 9
// strDist("catcowcat", "cow") → 3
// strDist("cccatcowcatxx", "cat") → 9

int (^strDist)(NSString *, NSString *) = ^(NSString *string, NSString *substring) {
    if (string.length == 0) {
        return 0;
    }
    
    // find 1st occurrence of substring
    // return length of substring
    if ([string rangeOfString:substring].location != NSNotFound) {
        return (int)substring.length;
    }
    
    return 0;
};