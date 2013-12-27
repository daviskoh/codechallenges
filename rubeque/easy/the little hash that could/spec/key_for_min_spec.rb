require 'spec_helper'
require_relative '../lib/key_for_min'

#Given a hash with numeric values, return the key for the smallest value.

describe 'key_for_min_value' do 
  it 'returns nil for an empty hash' do 
    expect(key_for_min_value({})).to eq(nil)
  end

  it 'finds key for lowest positive value' do 
    expect(key_for_min_value({"k" => 2, "h" => 3, "j" => 1})).to eq('j')
  end

  it 'finds key for lowest value even if negative number' do 
    expect(key_for_min_value({"o" => 0, "z" => -2, "j" => 1})).to eq('z')
  end
end