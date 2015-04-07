//
//  Count11Tests.swift
//  Count11Tests
//
//  Created by Davis Koh on 4/7/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

import Cocoa
import XCTest

class Count11Tests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testBaseCase() {
        let message = "should be 0"
        
        XCTAssertEqual(count11(""), 0, message)

        XCTAssertEqual(count11("1"), 0, message)
        XCTAssertEqual(count11("z"), 0, message)
    }
    
    func testNoOccurrences() {
        let message = "it should return 0"
        
        XCTAssertEqual(count11("1b"), 0, message)
        XCTAssertEqual(count11("asdf"), 0, message)
        XCTAssertEqual(count11("ljkfs1ljk2"), 0, message)
    }
    
    func testSingleOccurrence() {
        let message = "it should pickup count when the first two chars a match"
        
        XCTAssertEqual(count11("11"), 1, message)
        XCTAssertEqual(count11("11sdfsdf"), 1, message)
    }
    
    func testRecursing() {
        let message = "it should keep recursing until the base case is hit"
        
        XCTAssertEqual(count11("asdfasdfsadf"), 0, message)
        XCTAssertEqual(count11("aaaaaa11"), 1, message)
        XCTAssertEqual(count11("aa11asdfasdf"), 1, message)
    }
    
    func testMultiOccurrence() {
        let message = "it should keep count of occurrences while recursing"
        
        XCTAssertEqual(count11("11aaaa33aaaa11aaa"), 2, message)
        XCTAssertEqual(count11("11aaaa33aaaa11aaa11"), 3, message)
    }
}
