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

- (void)testBaseCase {
    XCTAssertEqual(numberSearch(@""), 0);
}

- (void)testFirstMatchAsANumber {
    XCTAssertEqual(numberSearch(@"1"), 1);
    XCTAssertEqual(numberSearch(@"11"), 11);
    XCTAssertEqual(numberSearch(@"35"), 35);
}

- (void)testNoNumbers {
    XCTAssertEqual(numberSearch(@"asdfsdf"), 0);
}

- (void)testNextMatchAsANumber {
    XCTAssertEqual(numberSearch(@"asdfasdf1"), 1);
    XCTAssertEqual(numberSearch(@"asdfasdf11"), 11);
    XCTAssertEqual(numberSearch(@"asdfasdf39180"), 39180);
}

- (void)testMultiMatches {
    XCTAssertEqual(numberSearch(@"asdfasdf39180asdfasfsf11123"), 39180 + 11123);
    XCTAssertEqual(numberSearch(@"1asdfas2dfasdf4asfs"), 1 + 2 + 4);
}

@end
