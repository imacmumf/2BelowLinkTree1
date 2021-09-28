import LinkButton from "./LinkButton";
import Card from "../UI/Card";

function LinkCard(props) {
  return (
    <div className = "card-wrap">
      <Card>
        <LinkButton
          title={props.items[0].title}
          link={props.items[0].link}
          pic={props.items[0].pic}
        />
      </Card>
      <Card>
        <LinkButton
          title={props.items[1].title}
          link={props.items[1].link}
          pic={props.items[1].pic}
        />
      </Card>
      <Card>
        <LinkButton
          title={props.items[2].title}
          link={props.items[2].link}
          pic={props.items[2].pic}
        />
      </Card>
      <Card>
        <LinkButton
          title={props.items[3].title}
          link={props.items[3].link}
          pic={props.items[3].pic}
        />
      </Card>
      <Card>
        <LinkButton
          title={props.items[4].title}
          link={props.items[4].link}
          pic={props.items[4].pic}
        />
      </Card>
    </div>
  );
}

export default LinkCard;
