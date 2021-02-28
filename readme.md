# Benchmarks of javascript test runners

## Table of contents

- Introduction
- Motivation
- Methodology
- Results
- Discussion
  
## Introduction

No matter the results of the benchmark one fact needs to remain clear: this benchmark does not serve as a reason for choosing a test runner over another. The fastest test runner **is not** the best test runner. In fact, there are many factors which should be considered in deciding on a test runner. 

The factors that should be included are but not limited to API surface, ease of use, built-in functionally, size of community and maintainer support. The asseration API of riteway is really interesting and I personally apreciate it. The support for testing an event emitter in node tap is invaluable. The size of community of jest is very good reason to use it. The long-time support of qunit demonstrates mainter support which is critical when depending on a project. It is disappoiting that uvu does not have built-in support for watching changes in files. The power-assert in ava is a much needed quality of life improvement. The list of reason to choose a specific test runner are limitless.

Lastly, this benchmark is not perfact and should be viewed with skeptisicsm. The best way to understand performance is to perform benchmarks with your own, real code. This benchmark experienced several limitations that are reviewed in the discussions and many improvements are in order.

## Motivation

For every successful project, testing need to be a priority and generally speaking this is accepted as best practice. There may be disagreement over how to test, when to test, definitions of certain tests and the differences between classical school and london school of testing. Nevertheless, there are characteristics of a good testing suite that span across the differences and disagreement. One of which is performance or said accurately 'my tests takes for ever to run'.

I will be the first to admit that performance should not be *the* reason to chose a test runner over another however arguably it should be a factor. A performant test runner will provide you with fast feedback. Recieving fast feedback from the test runner encourages the developer to use the test runner more. Higher utizilation of writing and running tests results in better software. Fast feedback is a neccessary component to integrating testing in the development cycle.

## Methodology

As with any javascript benchmark, there will be optimizations perform on the source code by the v8 engine. The optimizations perform by the v8 engine can sometimes render benchmarks meaningless. In constructing this benchmark an assumption made was that the optimizations will differ and thus impact performance since each test runner's implementaion will be different So techinically this benchmark will be to demonstrate the performance of a test runner post-optimizations for a particular version of the v8 engine, 8.4.371.19.

The test runners included in the benchmark are:

- ava
- jasmine
- jest
- mocha
- qunit
- riteway
- tap
- tape
- teenytest
- uvu

The api surface of the selected test runners differ vastly. For example, ava has built-in support for testing observalbles. As a result, the benchmark only includes a set of assertations that are available in all test runners. This has some implications which will be examine in the discussions section. The name of particular assertion may differ accross test runners however a particualur behavior, such as asserting a truthy value, exist in all of the test runners. 

The set of assertions included in the benchmark are:

All test files are written as CommonJs modules, not as ES modules. This was to avoid the time added for compliation of files and to keep the benchmarks simple.

The main tool used to generate the benchmarks is a command line benchmarking tool named hyperfine. Hyperfine was choosen for its ability to warmup up the filesystem prior to benchmarking, isolation of each benchmark run and the amount of statiscal information generated. 

## Results

## Discussion
