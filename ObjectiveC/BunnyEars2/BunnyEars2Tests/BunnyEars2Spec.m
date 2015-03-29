//
//  BunnyEars2Spec.m
//  BunnyEars2
//
//  Created by Davis Koh on 3/28/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <XCTest/XCTest.h>
#import "BunnyEars2.h"

@interface BunnyEars2Spec : XCTestCase {
    int _bunnyEars;
}

@end

@implementation BunnyEars2Spec

- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testExample {
    // This is an example of a functional test case.
    XCTAssert(YES, @"Pass");
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

#pragma mark TestCountingBunnyEars

- (void)testNoBunnies {
    _bunnyEars = [BunnyEars2 calculateEars:0];
    
    XCTAssertEqual(_bunnyEars, 0);
}

- (void)testOneBunny {
    _bunnyEars = [BunnyEars2 calculateEars:1];
    
    XCTAssertEqual(_bunnyEars, 2);
}

- (void)testEvenNumberOfBunnies {
    _bunnyEars = [BunnyEars2 calculateEars:2];
    
    XCTAssertEqual(_bunnyEars, 5);
}

- (void)testOddNumberOfBunnies {
    _bunnyEars = [BunnyEars2 calculateEars:3];
    
    XCTAssertEqual(_bunnyEars, 7);
}

@end
