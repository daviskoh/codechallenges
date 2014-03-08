require 'spec_helper'
require_relative '../lib/palindrome'

describe '#palindrome?' do
  it 'does something' do 
    expect(palindrome?('e')).to_not eq(nil)
  end

  it 'handles a simple 1 letter case' do 
    expect(palindrome?('e')).to eq(true)
  end
end