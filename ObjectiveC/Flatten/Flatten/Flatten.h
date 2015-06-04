//
//  Flatten.h
//  Flatten
//
//  Created by Davis Koh on 6/3/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>

//! Project version number for Flatten.
FOUNDATION_EXPORT double FlattenVersionNumber;

//! Project version string for Flatten.
FOUNDATION_EXPORT const unsigned char FlattenVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <Flatten/PublicHeader.h>


NSArray *(^flatten)(NSArray *) = ^(NSArray *array) {
    return [[NSArray alloc] init];
};