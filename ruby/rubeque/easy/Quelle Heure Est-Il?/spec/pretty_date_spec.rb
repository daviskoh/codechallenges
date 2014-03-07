require 'spec_helper'
require_relative '../lib/pretty_date'

describe '#pretty_date' do 
  it 'formats the date properly for US-style dates' do
    expect(pretty_date("11-30-1835")).to eq('Nov 30, 1835')
  end
  
  it 'formats the date properly for dates that include letter months' do 
    expect(pretty_date("July 20, 1933")).to eq('Jul 20, 1933')
  end
  
  it 'formats the date correctly for dates starting with the year' do
    expect(pretty_date("1922-11-11")).to eq('Nov 11, 1922')
  end
  
  it 'formats the date correctly with dates separated by /s' do
    expect(pretty_date("9/20/1978")).to eq('Sep 20, 1978')
  end
end