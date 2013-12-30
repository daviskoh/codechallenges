require 'spec_helper'
require_relative '../lib/comma'

describe 'separate_with_comma' do 
  it 'does not separate a number with 3 or less digits' do 
    expect(separate_with_comma(100)).to eq('100')
  end

  it 'adds comma to 4 digit number' do 
    expect(separate_with_comma(1000)).to eq('1,000')
  end

  it 'adds comma to 6 digit number' do 
    expect(separate_with_comma(100000)).to eq('100,000')
  end

  it 'adds comma to 7 digit number' do 
    expect(separate_with_comma(1000000)).to eq('1,000,000')
  end
end