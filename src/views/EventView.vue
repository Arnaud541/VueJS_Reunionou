<template>
    <div class="box columns">
        <div class="column is-half">
            <div class="has-text-centered title">
                Nom de l'évènement<br/>
            </div>
            Description de l'évènement<br/><br/> 
            <div class="columns box">
                <div class="column">
                    Participants<br/>
                    <div class="box">
                        <ul>
                            <li>Participant1 Refus</li>
                            <li>Participant2 Participe</li>
                            <li>Participant3 En attente</li>
                        </ul>
                    </div> 
                </div>
                <div class="column">
                    <button class="button is-primary">Accepter</button><br/>
                    <button class="button is-danger">Refuser</button>
                </div>
            </div>
        </div>
        <div class="column">
            <figure>
                <img src="/public/assets/img/téléchargement.png">
            </figure>
        </div>
    </div>
</template>