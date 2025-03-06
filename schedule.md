---
layout: default
title: Schedule
---

<div class="container">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="text-center mb-5">Workshop Schedule</h1>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>9:00 AM - 9:15 AM</h3>
                        <h4>Opening Remarks</h4>
                        <p>Welcome and introduction to the workshop</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>9:15 AM - 10:15 AM</h3>
                        <h4>Keynote Speech</h4>
                        <p>"Causal Inference in Modern Recommendation Systems"</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-coffee"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>10:15 AM - 10:45 AM</h3>
                        <h4>Coffee Break</h4>
                        <p>Networking and refreshments</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>10:45 AM - 12:15 PM</h3>
                        <h4>Paper Presentations</h4>
                        <p>Selected paper presentations and discussions</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>12:15 PM - 1:15 PM</h3>
                        <h4>Lunch Break</h4>
                        <p>Lunch and networking</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>1:15 PM - 2:15 PM</h3>
                        <h4>Panel Discussion</h4>
                        <p>"Challenges and Opportunities in Causal Learning for Recommendations"</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>2:15 PM - 3:15 PM</h3>
                        <h4>Interactive Session</h4>
                        <p>Hands-on workshop on implementing causal learning in recommendation systems</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>3:15 PM - 3:45 PM</h3>
                        <h4>Open Discussion</h4>
                        <p>Q&A and future directions</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">
                        <i class="fas fa-flag-checkered"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>3:45 PM - 4:00 PM</h3>
                        <h4>Closing Remarks</h4>
                        <p>Summary and next steps</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--gradient-primary);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
}

.timeline-badge {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    z-index: 1;
}

.timeline-content {
    width: calc(50% - 50px);
    padding: 1.5rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    position: relative;
    transition: transform 0.3s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
}

.timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
}

.timeline-content h3 {
    color: var(--secondary-color);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.timeline-content h4 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
    .timeline::before {
        left: 30px;
    }
    
    .timeline-badge {
        left: 30px;
    }
    
    .timeline-content {
        width: calc(100% - 80px);
        margin-left: 80px !important;
    }
}
</style> 