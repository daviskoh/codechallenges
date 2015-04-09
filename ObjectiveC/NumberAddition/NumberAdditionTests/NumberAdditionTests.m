//
//  NumberAdditionTests.m
//  NumberAdditionTests
//
//  Created by Davis Koh on 4/9/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <XCTest/XCTest.h>
#import "NumberAddition.h"

@interface NumberAdditionTests : XCTestCase

@end

@implementation NumberAdditionTests

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

- (void)testBaseCase {
    XCTAssertEqual(numberSearch(@""), 0);
}

@end
