"use client";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col mt-[5rem] items-center">
      <h1>Oops! An error has occured!</h1>
      <p>{error.message}</p>
    </div>
  );
}
