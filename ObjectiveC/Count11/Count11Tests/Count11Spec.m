//
//  Count11Spec.m
//  Count11
//
//  Created by Davis Koh on 4/7/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <XCTest/XCTest.h>
#import "Count11.h"

@interface Count11Spec : XCTestCase

@end

@implementation Count11Spec

- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testBaseCase {
    XCTAssertEqual(count11(@""), 0);
    XCTAssertEqual(count11(@"1"), 0);
}

- (void)testPerfectMatch {
    XCTAssertEqual(count11(@"11"), 1);
}

- (void)testNoOccurrence {
    XCTAssertEqual(count11(@"als"), 0);
    
    XCTAssertEqual(count11(@"alieoiafs"), 0);
    XCTAssertEqual(count11(@"al1i1eoiafs"), 0);
}

- (void)testSingleOccurrence {
    XCTAssertEqual(count11(@"11"), 1);
    
    XCTAssertEqual(count11(@"b11"), 1);
    
    XCTAssertEqual(count11(@"11a"), 1);
}

- (void)testMultiOccurrence {
    XCTAssertEqual(count11(@"a11b11"), 2);
    
    XCTAssertEqual(count11(@"11b110"), 2);
    
    XCTAssertEqual(count11(@"11bh11"), 2);
    
    XCTAssertEqual(count11(@"11bh11aa1134"), 3);
}

@end
