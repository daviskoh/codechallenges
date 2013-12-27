require 'spec_helper'
require_relative '../lib/fibonacci'

describe 'fibo_finder' do 
  it 'start at 0' do 
    expect(fibo_finder(0)).to eq(0)
  end

  it 'continues at 1' do 
    expect(fibo_finder(1)).to eq(1)
  end
end



# assert_equal 3, fibo_finder(4)
# assert_equal 13, fibo_finder(7)
# assert_equal 55, fibo_finder(10)