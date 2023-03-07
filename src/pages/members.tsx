import { FunctionComponent } from "react";

interface IMembersProps {
}

const Members: FunctionComponent<IMembersProps> = (props) => {
  return (
    <section>
        <div>
            <p>Billy Myles-Berkouwer</p>
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div>
            <p>Arran Baker</p>
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        </div>
        <div>
            <p>Matt Congdon</p>
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
        </div>
    </section>
  );
};

export default Members;
