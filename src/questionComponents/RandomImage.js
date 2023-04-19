export function RandomImage({ imageLink, caption }) {
  return (
    <div>
      <figure>
        <img src={imageLink} alt="Random" width="300px" height="300px"></img>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}
