//
//  Division.swift
//  Division
//
//  Created by Davis Koh on 4/9/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

import Foundation

// Have the function Division(num1,num2)
// take both parameters being passed
// and return the Greatest Common Factor.
// That is, return the greatest number that
// evenly goes into both numbers with no remainder.
// For example: 12 and 16 both are divisible by 1, 2, and 4
// so the output should be 4.
// The range for both parameters will be from 1 to 10^3.

func division(n1: Int, n2: Int) -> Int {
    var n1New = n1
    var n2New = n2
    
    if n1 == n2 {
        return n1
    }
    
    // negative numbers are still evenly divisible by pos nums
    if n1New < 0 {
        n1New *= -1
    }
        
    if n2New < 0 {
        n2New *= -1
    }
    
    // check which is greater of the 2 n's & set to var greater
    let greater = n1New > n2New ? n1New : n2New
    // iterate from var greater downwards
    for var n = n2New; n >= 1; n-- {
        println(n)
        
        // when find a common factor, return
        if n1New % n == 0 && n2New % n == 0 {
            return n
        }
    }
    
    return 1
}