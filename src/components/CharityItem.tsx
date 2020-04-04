import React from 'react';

import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';

import styles from './CharityItem.module.css';

const CharityItem: React.FC<{
    charityName: string;
    tags: Array<string>;
    charityID: number;
}> = props => {
    const imageFolder = '../images';

    const renderTags = () => {
        let listOfTags: string = '';

        for (let tag of props.tags) {
            listOfTags = listOfTags + tag + ', ';
        }

        return listOfTags.substring(0, listOfTags.length - 2);
    }

    return (
        <IonCard button>
            <IonCardHeader>
            {/* <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tabs/speakers/${speaker.id}`}> */}
                <IonItem>
                    <IonAvatar slot="start">
                        <img src={`${imageFolder}/kevinxu.jpg`} />
                    </IonAvatar>
                    <IonLabel>
                    <h2>{props.charityName}</h2>
                    <p>{renderTags()}</p>
                    </IonLabel>
                </IonItem>
            </IonCardHeader>

            <IonCardContent>
                <IonList lines = 'none'>
                    <IonItem>
                        <IonLabel className = {styles.label}>
                            <h3>Kevin Xu is the CEO of MEBO International, a California- and Beijing-based intellectual-property</h3>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonCardContent>

        </IonCard>
    );
}

export default CharityItem;