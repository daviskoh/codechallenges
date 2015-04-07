//
//  Count11.swift
//  Count11
//
//  Created by Davis Koh on 4/7/15.
//  Copyright (c) 2015 com.DavisKoh. All rights reserved.
//

import Foundation

func count11(s: String) -> Int {
    if countElements(s) < 2 {
        return 0
    }
    
    let firstTwoChars = (s as NSString).substringToIndex(2)
    
    if firstTwoChars == "11" {
        return 1 + count11((s as NSString).substringFromIndex(2))
    }
    
    return count11((s as NSString).substringFromIndex(1))
}