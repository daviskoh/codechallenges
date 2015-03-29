//
//  BunnyEars2.h
//  BunnyEars2
//
//  Created by Davis Koh on 3/28/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

// We have bunnies standing in a line, numbered 1, 2, ...
// The odd bunnies (1, 3, ..) have the normal 2 ears.
// The even bunnies (2, 4, ..) we'll say have 3 ears,
// because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line
// 1, 2, ... n (without loops or multiplication).

#import <Foundation/Foundation.h>

@interface BunnyEars2 : NSObject

- (int)calculate:(int)bunnies;

@end
