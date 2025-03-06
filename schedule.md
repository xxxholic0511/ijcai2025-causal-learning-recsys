---
layout: default
title: Schedule
---

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">Tentative Schedule</h1>
            <p class="text-center lead mb-5">Workshop Schedule for August 16th, 2025</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="schedule-timeline">
                <div class="timeline-item">
                    <div class="time">9:00 AM - 9:15 AM</div>
                    <div class="content">
                        <h4>Welcome and Opening Remarks</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">9:15 AM - 10:00 AM</div>
                    <div class="content">
                        <h4>Invited Keynote 1</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">10:00 AM - 10:45 AM</div>
                    <div class="content">
                        <h4>Contributed Paper Session 1</h4>
                    </div>
                </div>

                <div class="timeline-item break">
                    <div class="time">10:45 AM - 11:00 AM</div>
                    <div class="content">
                        <h4>Coffee Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">11:00 AM - 12:00 PM</div>
                    <div class="content">
                        <h4>Contributed Paper Session 2</h4>
                    </div>
                </div>

                <div class="timeline-item break">
                    <div class="time">12:00 PM - 1:00 PM</div>
                    <div class="content">
                        <h4>Lunch Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">1:00 PM - 1:45 PM</div>
                    <div class="content">
                        <h4>Invited Keynote 2</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">1:45 PM - 2:30 PM</div>
                    <div class="content">
                        <h4>Poster Session and Networking Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">2:30 PM - 3:15 PM</div>
                    <div class="content">
                        <h4>Breakout Group Discussion</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">3:15 PM - 4:00 PM</div>
                    <div class="content">
                        <h4>Contributed Paper Session 3</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="time">4:00 PM - 4:30 PM</div>
                    <div class="content">
                        <h4>Closing Remarks</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.schedule-timeline {
    position: relative;
    padding: 2rem 0;
}

.schedule-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--secondary-color);
}

.timeline-item {
    position: relative;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: var(--secondary-color);
    border-radius: 50%;
    z-index: 1;
}

.timeline-item.break::before {
    background: var(--accent-color);
}

.time {
    position: absolute;
    left: 0;
    width: 45%;
    text-align: right;
    padding-right: 2rem;
    font-weight: 600;
    color: var(--primary-color);
}

.content {
    position: absolute;
    right: 0;
    width: 45%;
    padding-left: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    padding: 1rem 1.5rem;
}

.content h4 {
    margin: 0;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.break .content {
    background: var(--light-bg);
}

@media (max-width: 768px) {
    .schedule-timeline::before {
        left: 30px;
    }

    .timeline-item::before {
        left: 30px;
    }

    .time {
        left: 60px;
        width: auto;
    }

    .content {
        left: 60px;
        right: 0;
        width: calc(100% - 60px);
        padding-left: 1rem;
    }
}
</style> 