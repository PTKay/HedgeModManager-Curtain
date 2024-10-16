import { CodesComponent } from "src/types/Code";
import Code from "../code/Code";
import CodeInfo from "../codeInfo/CodeInfo";


import styles from "./CodesList.module.css"
import animations from "src/curtain/stylesheets/modules/animations.module.css"

export default function CodesList(props: CodesComponent) {
    const codes = props.codes

    return (
        <div className={`${styles.codesList} ${animations.scaleIn}`}>
            <div className={styles.codes}>
                <div className={styles.header}>
                    <span></span>
                    <span className={styles.title}>Name</span>
                    <span className={styles.author}>Author</span>
                </div>
                <div className={styles.list}>
                    {codes.map(code => <Code code={code} key={code.id}/>)}
                </div>
            </div>
            <CodeInfo />
        </div>
    );
}