#import <Foundation/Foundation.h>

int main() {
    @autoreleasepool {
        NSString *(^fizzBuzzString)(NSUInteger) = ^ NSString * (NSUInteger n) {
            if (n % 15 == 0) {
                return @"FizzBuzz";
            } else if (n % 5 == 0) {
                return @"Buzz";
            } else if (n % 3 == 0) {
                return @"Fizz";
            }

            return [NSString stringWithFormat: @"%lu", (unsigned long)n];
        };

        NSRange nums = NSMakeRange(1, 100);

        for (NSUInteger i = nums.location; i <= nums.length; i++) {
            NSLog(@"%@", fizzBuzzString(i));
        }
    }
}
