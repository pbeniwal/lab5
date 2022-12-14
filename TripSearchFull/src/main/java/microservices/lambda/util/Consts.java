// Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License"). You may
// not use this file except in compliance with the License. A copy of the
// License is located at
//
//	  http://aws.amazon.com/apache2.0/
//
// or in the "license" file accompanying this file. This file is distributed
// on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
// express or implied. See the License for the specific language governing
// permissions and limitations under the License.


package microservices.lambda.util;

/**
 *
 *  Static constants class
 *
 */
public class Consts {

    private Consts() {} // callers can't instantiate class itself

    // "undefined" is the string sent by the Amazon API Gateway console when using
    // the console's test functionality if an API parameter is left blank
    public static final String UNDEFINED = "undefined";

}
