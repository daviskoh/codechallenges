require 'spec_helper'
require_relative '../lib/palindrome'

describe '#palindrome?' do
  it 'does something' do 
    expect(palindrome?('e')).to_not eq(nil)
  end

  it 'handles a simple 1 letter case' do 
    expect(palindrome?('e')).to eq(true)
  end

  it 'returns false for 2 letter word' do 
    expect(palindrome?('ea')).to eq(false)
  end

  it 'correctly handles multiple word palindromes' do
    expect(palindrome?('race car')).to eq(true)
  end
end