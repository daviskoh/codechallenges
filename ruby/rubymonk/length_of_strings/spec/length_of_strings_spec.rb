require 'spec_helper'
require_relative '../lib/length_of_strings'

describe '#length_of_strings' do 
  it 'does something' do 
    expect(length_of_strings(['ruby'])).to_not eq(nil)
  end

  it 'provides correct value for array of 1 string' do 
    expect(length_of_strings ['ruby']).to eq([4])
  end

  it 'provides correct value for array of multiple string' do 
    expect(length_of_strings ['ruby', 'foo', 'grill']).to eq([4, 3, 5])
  end
end
