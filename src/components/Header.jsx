export default function Header({ value }) {
  return (
    <div className="header" id={"display"}>
      <p className="headtext" id={"headID"}>
        {value}
      </p>
    </div>
  );
}
