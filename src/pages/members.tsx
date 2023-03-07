import { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface IMembersProps {
}

const Members: FunctionComponent<IMembersProps> = (props) => {
  return (
    <motion.main
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section-horizontal">
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
    </motion.main>
  );
};

export default Members;
