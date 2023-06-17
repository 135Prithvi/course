export default function Form() {
  return (
    <div className="join join-vertical lg:join-horizontal w-full">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-md w-full max-w-xs"
      ></textarea>
      <button className="btn join-item">Button</button>
    </div>
  );
}
