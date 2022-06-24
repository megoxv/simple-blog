import React from "react";
import Head from "next/head";
import { siteName } from "../assets/variables";

const forgotPassword = () => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark">
      <Head>
        <title>Forgot Password | {siteName}</title>
      </Head>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen-calc">
        <div className="bg-white dark:bg-secondary-dark max-w-md w-full space-y-8 box-shadow p-12 rounded-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Forgot password?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
              Please enter your registered email address and we will send
              instructions to help reset your password.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full mb-3 px-3 py-2 border border-gray-300 placeholder-gray-500 dark:bg-light-gray dark:placeholder-gray-200 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sent reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
