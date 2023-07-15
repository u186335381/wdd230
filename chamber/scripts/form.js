const membership = document.querySelector(".radio-membership")
membership.addEventListener("click", updateMembershipLevel)

function updateMembershipLevel(e) {
    radio_elements = [
        {
            id: 'np_membership',
            description: 'There is no fee if you are a non profit organization! You can attend all our networking and learning events, including a free pass for training in how to be better prepared for that future job of yours. Qe can even mention your name in the chamber site!'
        }, {
            id: 'bronze_membership',
            description: 'Price: 10$ per month. If you desire to be able to attend our meetings you surely need this membership, you will be able to go to every one of our meetings, although front seats are not guaranteed, but you will learn much from all of the instructors and you will get a chance to network with important people. There is no discount for eating food at our events, but it is delicious, give it a try!'
        }, {
            id: 'silver_membership',
            description: 'Price 25$ per month. If you want to become a valuable member, with this membership you will be given a front seat in our learning activities, and your advertising may appear in the chamber site, although not in the first place but you will get a chance to be viewed by some of our thousands of users! And if you desire to eat food at our events there is a 50% discount, enjoy our food!'
        }, {
            id: 'gold_membership',
            description: 'Price 50$ per month. Increased costs can bring you a lot of benefits! You will be able to attend all our meetings and also you will get a front seat in every event, you will also be allowed to teach in a training session if you wish, you will be among the first to be advertised in our chamber site! Also, if you eat food at our events there is a discount of 100%.'
        }
    ]
    if (e.target.id == '') {
        return
    }
    const membershipNameText = document.querySelector('.membership-name')
    membershipNameText.textContent = e.target.value

    radio_elements.forEach(radio => {
        if (radio.id === `${e.target.id}`) {
            const membershipDescriptionText = document.querySelector('.membership-benefit')
            membershipDescriptionText.textContent = radio.description
        } else {
            const element = document.getElementById(radio.id)
            element.checked = false
        }
    })
}


function setTimestamp() {
    const timestamp = document.getElementById('timestamp')
    timestamp.value = new Date()
}