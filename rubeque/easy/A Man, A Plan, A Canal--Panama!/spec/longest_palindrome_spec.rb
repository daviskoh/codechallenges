require 'spec_helper'
require_relative '../lib/longest_palindrome'

statement = 'finds the longest palindrome'

describe 'longest_palindrome' do 
  it "#{statement} for group of letters" do 
    expect(longest_palindrome("xyzzy")).to eq("yzzy")
  end

  it "#{statement} for large group of letters" do 
    expect(longest_palindrome("afbbbfjdjklgdfdhfdkjfffhhfffjkdfhdhkyejejfjkd")).to eq("dhfdkjfffhhfffjkdfhd")
  end

  it "#{statement} for real words" do 
    expect(longest_palindrome("bartarcarracecarbartar")).to eq("racecar")
  end

  it "#{statement} for number strings" do 
    expect(longest_palindrome("3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982")).to eq("46264")
  end
end