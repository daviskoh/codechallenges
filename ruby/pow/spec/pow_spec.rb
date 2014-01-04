require 'spec_helper'
require_relative '../lib/pow'

describe '#pow' do 
  it 'returns something' do 
    expect(pow(2,3)).should_not be_nil
  end

  it 'returns the base raised to the exponent power' do
    expect(pow(2,3)).to eq(8)
  end
end