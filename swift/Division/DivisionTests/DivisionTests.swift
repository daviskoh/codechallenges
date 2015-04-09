//
//  DivisionTests.swift
//  DivisionTests
//
//  Created by Davis Koh on 4/9/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

import Cocoa
import XCTest

class DivisionTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testEqualNumbers() {
        let testValues = [
            1,
            2,
            3,
            4,
            5,
            12,
            16
        ]
        
        for n in testValues {
            XCTAssertEqual(division(n, n), n, "when the 2 numbers are equal, it should return either number")
        }
    }
    
    func testBaseCase() {
        XCTAssertEqual(division(1, 2), 1, "the lowest possible common factor should be 1")
        XCTAssertEqual(division(3, 5), 1, "the lowest possible common factor should be 1")
        XCTAssertEqual(division(11, 79), 1, "the lowest possible common factor should be 1")
    }
    
    func testGreatestCommonFactor() {
        XCTAssertEqual(division(4, 6), 2, "should be 2")
        XCTAssertEqual(division(10, 15), 5, "should be 5")
        XCTAssertEqual(division(26, 39), 13, "should be 13")
    }
    
    func testBothNegativeNumbers() {
        XCTAssertEqual(division(-20, -15), 5, "should handle negative numbers")
        XCTAssertEqual(division(-12, -16), 4, "should handle negative numbers")
    }
    
    func testSingleNegativeNumber() {
        XCTAssertEqual(division(2, -6), 2, "the lowest possible common factor should be 1")
    }
}
