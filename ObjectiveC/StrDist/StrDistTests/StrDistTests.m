//
//  StrDistTests.m
//  StrDistTests
//
//  Created by Davis Koh on 4/11/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <XCTest/XCTest.h>
#import "StrDist.h"

@interface StrDistTests : XCTestCase

@end

@implementation StrDistTests

- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

- (void)testBaseCase {
    int expected = 0;
    
    XCTAssertEqual(strDist(@"", @"cat"), expected);
    XCTAssertEqual(strDist(@"", @"a"), expected);
    XCTAssertEqual(strDist(@"", @""), expected);
}

- (void)testNoMatchesOfSubstring {
    int expected = 0;
    
    XCTAssertEqual(strDist(@"asdfasdf", @"cat"), expected);
    XCTAssertEqual(strDist(@"faeiojr", @"zero"), expected);
    XCTAssertEqual(strDist(@"12312asdfdud", @"dude"), expected);
}

- (void)testSingleMatch {
    XCTAssertEqual(strDist(@"aba", @"b"), 1);
    
    XCTAssertEqual(strDist(@"BoBcatmeowro", @"cat"), 3);
}

- (void)testOpeningAndClosesMatches {
    XCTAssertEqual(strDist(@"aba", @"a"), 3);
    
    XCTAssertEqual(strDist(@"vm12345vm", @"vm"), 9);
    
    XCTAssertEqual(strDist(@"blahcatblahcatblah", @"cat"), 10);
}

@end
