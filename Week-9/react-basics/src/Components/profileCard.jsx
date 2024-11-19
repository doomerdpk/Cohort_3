export default function ProfileCard(props) {
  return (
    <div
      style={{
        width: 200,
        background: "white",
        border: "1px solid grey",
        borderRadius: 10,
      }}
    >
      <img src={props.img1url} alt="" style={{ width: 200, height: 70 }} />
      <div style={{ padding: 15 }}>
        <img
          src={props.img2url}
          style={{
            width: 70,
            height: 70,
            borderRadius: 70,
            marginLeft: 10,
            marginTop: -40,
          }}
        />
        <div>
          <h3>{props.name}</h3>
          <p>{props.position}</p>
          <p>{props.location}</p>
          <div style={{ display: "flex" }}>
            <span>
              <img
                src={props.img3url}
                alt=""
                style={{ width: 15, height: 15, marginRight: 5 }}
              />
            </span>
            <span>{props.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
