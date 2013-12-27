require 'spec_helper'
require_relative '../lib/fibonacci'

describe 'fibo_finder' do 
  it 'start at 0' do 
    expect(fibo_finder(0)).to eq(0)
  end

  it 'continues at 1' do 
    expect(fibo_finder(1)).to eq(1)
  end

  it 'finds the 4th item' do 
    expect(fibo_finder(4)).to eq(3)
  end

  it 'finds the 7th item' do 
    expect(fibo_finder(7)).to eq(13)
  end

  it 'finds the 10th item' do 
    expect(fibo_finder(10)).to eq(55)
  end
end
