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


// Given a string and a non-empty substring sub, compute recursively
// the largest substring
// which starts and ends with sub and return its length.

// strDist("catcowcat", "cat") → 9
// strDist("catcowcat", "cow") → 3
// strDist("cccatcowcatxx", "cat") → 9

// Concept:
// iterate forwards until 1st match is found
// iterate backwards until 1st match is found

int callN = 0;

int (^strDist)(NSString *, NSString *) = ^(NSString *string, NSString *substring) {
    NSLog(@"call number: %d", callN++);
    NSLog(@"string: %@", string);
    
    if (string.length < substring.length || !string.length) {
        return 0;
    }
    
    NSString *firstChars = [string substringToIndex: substring.length];
    
    // if(str.substring(0, sbLen).equals(sub))
    if ([firstChars isEqualToString: substring]) {

        // if(str.substring(stLen - sbLen, stLen).equals(sub))
        NSRange range = NSMakeRange(string.length - substring.length, substring.length);
        
        NSLog(@"******* range begin ********");
        NSLog(@"location: %lu", range.location);
        NSLog(@"length: %lu", range.length);
        NSLog(@"******* range end ********");
        
        NSString *lastChars = [string substringWithRange: range];
        
        NSLog(@"******* lastChars begin ********");
        NSLog(@"lastChars: %@", lastChars);
        NSLog(@"******* lastChars end ********");

        if ([lastChars isEqualToString: substring]) {
            return (int)string.length;
        }

        // str.substring(0, stLen - 1)
        NSRange nextRange = NSMakeRange(0, string.length - 1);
        
        NSLog(@"******* nextRange begin ********");
        NSLog(@"location: %lu", nextRange.location);
        NSLog(@"length: %lu", nextRange.length);
        NSLog(@"******* nextRange end ********");

        NSString *nextString = [string substringWithRange: nextRange];
        
        NSLog(@"******* nextString begin ********");
        NSLog(@"nextString: %@", nextString);
        NSLog(@"******* nextString end ********");

        
        // strDist(str.substring(1), sub);
        return strDist(nextString, substring);
    }
    
    NSString *nextString = [string substringFromIndex: 1];
    return strDist(nextString, substring);
};