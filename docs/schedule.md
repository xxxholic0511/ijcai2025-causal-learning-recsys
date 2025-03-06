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
        <div class="col-lg-10 mx-auto">
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-time">9:00 AM - 9:15 AM</div>
                    <div class="timeline-content">
                        <h4>Welcome and Opening Remarks</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">9:15 AM - 10:00 AM</div>
                    <div class="timeline-content">
                        <h4>Invited Keynote 1</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">10:00 AM - 10:45 AM</div>
                    <div class="timeline-content">
                        <h4>Contributed Paper Session 1</h4>
                    </div>
                </div>

                <div class="timeline-item break">
                    <div class="timeline-time">10:45 AM - 11:00 AM</div>
                    <div class="timeline-content">
                        <h4>Coffee Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">11:00 AM - 12:00 PM</div>
                    <div class="timeline-content">
                        <h4>Contributed Paper Session 2</h4>
                    </div>
                </div>

                <div class="timeline-item break">
                    <div class="timeline-time">12:00 PM - 1:00 PM</div>
                    <div class="timeline-content">
                        <h4>Lunch Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">1:00 PM - 1:45 PM</div>
                    <div class="timeline-content">
                        <h4>Invited Keynote 2</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">1:45 PM - 2:30 PM</div>
                    <div class="timeline-content">
                        <h4>Poster Session and Networking Break</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">2:30 PM - 3:15 PM</div>
                    <div class="timeline-content">
                        <h4>Breakout Group Discussion</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">3:15 PM - 4:00 PM</div>
                    <div class="timeline-content">
                        <h4>Contributed Paper Session 3</h4>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-time">4:00 PM - 4:30 PM</div>
                    <div class="timeline-content">
                        <h4>Closing Remarks</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 250px;
    width: 2px;
    background: var(--primary-color);
}

.timeline-item {
    position: relative;
    display: flex;
    margin-bottom: 40px;
    align-items: flex-start;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 244px;
    top: 15px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--primary-color);
    z-index: 1;
}

.timeline-item.break::before {
    background: var(--accent-color);
}

.timeline-time {
    width: 220px;
    padding-right: 30px;
    text-align: right;
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1rem;
    line-height: 1.4;
    position: relative;
    top: 8px;
}

.timeline-content {
    flex: 1;
    margin-left: 60px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.timeline-content h4 {
    margin: 0;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.break .timeline-content {
    background: var(--light-bg);
}

@media (max-width: 768px) {
    .timeline::before {
        left: 30px;
    }

    .timeline-item {
        flex-direction: column;
    }

    .timeline-item::before {
        left: 24px;
    }

    .timeline-time {
        width: 100%;
        text-align: left;
        padding-left: 60px;
        margin-bottom: 10px;
    }

    .timeline-content {
        margin-left: 60px;
        width: calc(100% - 60px);
    }
}
</style> 