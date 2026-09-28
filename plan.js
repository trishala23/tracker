// Interview prep plan data. Edit this file to change the plan.
// Progress is keyed by section id + item text, so reordering items keeps your ticks.
window.PLAN = {
  title: "Java Backend + DevOps Interview Prep",
  start: "2026-09-28",
  end: "2026-10-30",

  priorities: [
    { area: "Core Java", p: "P0", depth: "Very strong" },
    { area: "Spring Boot", p: "P0", depth: "Very strong" },
    { area: "Microservices", p: "P0", depth: "Very strong" },
    { area: "System Design", p: "P0", depth: "Very strong" },
    { area: "DSA / Java coding", p: "P0", depth: "Strong" },
    { area: "Kubernetes + Docker", p: "P0", depth: "Strong" },
    { area: "Kafka / Event-driven", p: "P1", depth: "Strong" },
    { area: "SQL + PostgreSQL", p: "P1", depth: "Strong" },
    { area: "Cloud — Azure/AWS", p: "P1", depth: "Strong" },
    { area: "CI/CD + DevOps", p: "P1", depth: "Strong" },
    { area: "Redis / caching", p: "P2", depth: "Medium-strong" },
    { area: "Observability", p: "P2", depth: "Medium-strong" },
    { area: "Security", p: "P2", depth: "Medium" },
    { area: "Reactive programming", p: "P2", depth: "Medium" },
    { area: "Flink", p: "P2", depth: "Basic" }
  ],

  phases: [
    {
      id: "p1", title: "Phase 1 — Core Java + DSA", range: "Sep 28 – Oct 4",
      goal: "Answer Java questions without hesitation.",
      days: [
        { date: "2026-09-28", title: "Java fundamentals", items: [
          "JVM architecture", "JDK vs JRE vs JVM", "Java compilation", "Stack vs Heap", "String pool",
          "String vs StringBuilder vs StringBuffer", "== vs .equals()", "hashCode()", "final", "static",
          "Immutable objects", "Wrapper classes", "Autoboxing / unboxing"] },
        { date: "2026-09-29", title: "OOP + Java design", items: [
          "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Composition vs inheritance",
          "Method overloading", "Method overriding", "Interface vs abstract class", "Default/static interface methods",
          "SOLID principles", "Immutable class design", "Java records", "Practice: implement an immutable class"] },
        { date: "2026-09-30", title: "Collections", items: [
          "ArrayList", "LinkedList", "HashMap", "HashSet", "TreeMap", "TreeSet", "ConcurrentHashMap",
          "PriorityQueue", "Deque", "HashMap flow: hash → bucket → equals → key/value", "HashMap collision",
          "Resizing & load factor", "equals/hashCode contract", "HashMap vs ConcurrentHashMap",
          "Fail-fast vs fail-safe", "ArrayList vs LinkedList"] },
        { date: "2026-10-01", title: "Java 8+ (coding-heavy)", items: [
          "Lambda", "Functional interfaces", "Predicate / Function / Consumer / Supplier", "Stream API",
          "Optional", "Method references", "Practice: filter / map / flatMap", "Practice: sorted / distinct",
          "Practice: groupingBy / partitioningBy", "Practice: reduce / collect"] },
        { date: "2026-10-02", title: "Multithreading", items: [
          "Process vs thread", "Thread lifecycle", "synchronized", "volatile", "Atomic classes",
          "Lock / ReentrantLock", "ReadWriteLock", "ExecutorService", "Callable / Future", "CompletableFuture",
          "ThreadPoolExecutor", "Deadlock", "Race condition", "Starvation", "Concurrent collections",
          "Answer: execute 10 API calls concurrently", "Answer: 1,000 requests arrive simultaneously"] },
        { date: "2026-10-03", title: "JVM + performance", items: [
          "JVM memory: Heap / Stack / Metaspace", "Garbage Collection", "Young / Old generation",
          "Minor / Major / Full GC", "G1 GC basics", "Memory leak", "OutOfMemoryError", "StackOverflowError",
          "CPU profiling", "Thread dump", "Heap dump", "Connect to real production incidents (threads, sizing)"] },
        { date: "2026-10-04", title: "DSA #1", items: [
          "Two Sum", "Longest Substring Without Repeating Characters", "Valid Parentheses", "Group Anagrams",
          "Longest Consecutive Sequence", "Top K Frequent Elements", "Merge Intervals",
          "Extra: two pointers problem", "Extra: sliding window problem", "Extra: stack/queue problem"] }
      ]
    },
    {
      id: "p2", title: "Phase 2 — Spring Boot + REST + Database", range: "Oct 5 – Oct 11",
      days: [
        { date: "2026-10-05", title: "Spring Core", items: [
          "IoC", "DI", "ApplicationContext", "Bean lifecycle", "@Component / @Service / @Repository",
          "@Controller vs @RestController", "Constructor injection", "@Autowired", "Bean scopes",
          "@Configuration / @Bean", "Explain Controller → Service → Repository → DB flow"] },
        { date: "2026-10-06", title: "Spring Boot", items: [
          "Auto-configuration", "Starter dependencies", "application.yml", "Profiles", "Configuration properties",
          "Actuator", "Logging", "Exception handling / @ControllerAdvice", "Validation / @Valid",
          "Custom exceptions", "Answer: how does Spring Boot start?", "Answer: how does Spring create beans?",
          "Answer: what happens when an HTTP request enters the app?"] },
        { date: "2026-10-07", title: "REST APIs", items: [
          "REST principles", "HTTP methods", "HTTP status codes", "Idempotency", "Pagination / filtering / sorting",
          "API versioning", "Validation", "Error response design", "OpenAPI / Swagger",
          "Authentication vs authorization"] },
        { date: "2026-10-08", title: "Spring Data / JPA", items: [
          "Entity / Repository", "Hibernate", "Persistence context", "Entity lifecycle", "Lazy vs eager loading",
          "N+1 problem", "JPQL / native query", "Transactions / @Transactional", "Propagation", "Isolation",
          "Optimistic locking", "Pessimistic locking", "Answer: what exactly does @Transactional do?"] },
        { date: "2026-10-09", title: "SQL + PostgreSQL", items: [
          "INNER / LEFT JOIN", "GROUP BY / HAVING", "Subqueries", "CTE", "Window functions", "Indexes",
          "Composite indexes", "Execution plan", "Normalization", "Transactions / ACID", "Isolation levels",
          "Practice SQL questions"] },
        { date: "2026-10-10", title: "Database performance", items: [
          "Query → Parser → Planner → Plan → Scan", "Slow queries", "Indexes", "Connection pool",
          "Locks / deadlocks", "Connection exhaustion", "Pagination at scale", "Read/write scaling",
          "Replication", "Answer: service scales 3 → 20 pods, DB doesn't"] },
        { date: "2026-10-11", title: "Spring interview day", items: [
          "30 Spring questions", "10 SQL questions", "2 Java coding problems", "1 mock interview"] }
      ]
    },
    {
      id: "p3", title: "Phase 3 — Microservices + Kafka + System Design", range: "Oct 12 – Oct 18",
      days: [
        { date: "2026-10-12", title: "Microservices", items: [
          "Monolith vs microservices", "Service boundaries", "Sync vs async communication", "REST / Feign",
          "Service discovery", "API gateway", "Load balancing", "Timeout", "Retry", "Circuit breaker",
          "Bulkhead", "Rate limiting", "Explain: when REST chain vs Kafka"] },
        { date: "2026-10-13", title: "Distributed systems", items: [
          "CAP theorem", "Consistency / availability / partition tolerance", "Eventual consistency",
          "Distributed transactions", "Saga pattern", "Orchestration vs choreography", "Idempotency",
          "Retries", "Duplicate messages", "Ordering", "Distributed locking",
          "Answer: A succeeds, B fails — how do you recover?"] },
        { date: "2026-10-14", title: "Kafka", items: [
          "Draw Kafka from memory", "Broker / Topic / Partition / Offset", "Producer / Consumer / Consumer group",
          "Replication / leader-follower", "Partition ordering", "Consumer rebalancing", "Retention",
          "Acknowledgment", "At-most / at-least / exactly-once", "Dead-letter topic", "Retry topic",
          "Kafka vs Azure Event Hubs"] },
        { date: "2026-10-15", title: "Kafka advanced", items: [
          "Partition key", "Consumer lag", "Offset commit: auto vs manual", "Retry & DLQ", "Idempotent producer",
          "Transactions", "Schema evolution", "Avro / Schema Registry", "Answer: process 10M events/day"] },
        { date: "2026-10-16", title: "Caching + Redis", items: [
          "Why caching?", "Cache-aside", "Read-through", "Write-through", "Write-behind", "TTL", "Eviction",
          "Cache invalidation", "Cache stampede", "Distributed cache", "Redis", "Redis data structures"] },
        { date: "2026-10-17", title: "System Design #1", items: [
          "URL Shortener: requirements & API", "URL Shortener: architecture & DB", "URL Shortener: cache & scaling",
          "URL Shortener: failures & monitoring", "Rate Limiter design"] },
        { date: "2026-10-18", title: "System Design #2", items: [
          "Notification System design", "Order Processing System design",
          "Cover APIs / DB / Kafka / cache", "Cover scaling / failure / retries", "Cover idempotency / monitoring"] }
      ]
    },
    {
      id: "p4", title: "Phase 4 — Docker + Kubernetes + Cloud + DevOps", range: "Oct 19 – Oct 25",
      days: [
        { date: "2026-10-19", title: "Docker", items: [
          "Image vs container", "Dockerfile", "Layers", "Registry", "Volume", "Network", "CMD vs ENTRYPOINT",
          "Multi-stage build", "Container resource limits"] },
        { date: "2026-10-20", title: "Kubernetes fundamentals", items: [
          "Pod", "Deployment", "ReplicaSet", "Service", "ConfigMap", "Secret", "Namespace", "Ingress",
          "Gateway", "Job / CronJob", "Control plane: API server / scheduler / controllers", "Worker nodes"] },
        { date: "2026-10-21", title: "Kubernetes advanced", items: [
          "Readiness / liveness / startup probes", "Requests & limits", "QoS classes", "HPA", "VPA concepts",
          "Rolling deployment & rollback", "Affinity", "Taints / tolerations", "Resource quota", "RBAC",
          "ServiceAccount"] },
        { date: "2026-10-22", title: "Kubernetes troubleshooting (hands-on)", items: [
          "CrashLoopBackOff", "Pending", "ImagePullBackOff", "OOMKilled", "High CPU / memory",
          "Readiness failure", "Service unavailable", "DNS / network issue",
          "kubectl get / describe / logs / exec", "kubectl get events / top", "kubectl get svc / endpoints / ingress",
          "Answer: deployment healthy but API returns 503"] },
        { date: "2026-10-23", title: "CI/CD", items: [
          "CI vs CD", "Pipeline stages: build → test → scan → image → deploy", "Unit vs integration tests",
          "Artifacts & registry", "GitLab CI", "Maven", "Helm", "Environment variables & secrets",
          "Deployment strategies", "Rollback", "Story: Azure DevOps → GitLab migration"] },
        { date: "2026-10-24", title: "Azure", items: [
          "AKS", "Azure Event Hubs", "Cosmos DB", "Azure PostgreSQL", "ACR", "Key Vault",
          "Compare: Kafka vs Event Hub", "Compare: PostgreSQL vs Cosmos DB", "Compare: Redis vs Cosmos DB"] },
        { date: "2026-10-25", title: "AWS + cloud comparison", items: [
          "EC2", "ECS", "RDS", "S3", "IAM", "CloudWatch", "VPC basics", "Lambda basics", "EKS concepts",
          "AWS ↔ Azure mapping table"] }
      ]
    },
    {
      id: "p5", title: "Phase 5 — Interview Mode", range: "Oct 26 – Oct 30",
      days: [
        { date: "2026-10-26", title: "Java + Spring mock", items: [
          "50 Java questions", "30 Spring Boot questions", "5 coding problems"] },
        { date: "2026-10-27", title: "Microservices + Kafka mock", items: [
          "Kafka ordering guarantees", "Consumer crash behaviour", "Preventing duplicate processing",
          "Handling downstream failure", "Retries & circuit breaker", "Distributed transactions",
          "Kafka vs Event Hub", "One full system design"] },
        { date: "2026-10-28", title: "Kubernetes + DevOps mock", items: [
          "Pod restarting", "Latency up after deployment", "CPU at 90%", "DB connections exhausted",
          "HPA not scaling", "Deployment stuck", "Service returns 503", "Container OOMKilled",
          "Deploy a Spring Boot service end-to-end", "Explain your CI/CD pipeline"] },
        { date: "2026-10-29", title: "Real project stories (STAR+)", items: [
          "Project architecture diagram", "Performance optimization", "3,000 RPS scalability", "Kubernetes HPA",
          "Cosmos DB query optimization", "Kafka / Event Hub", "CTXDA event processing", "GitLab migration",
          "Envoy troubleshooting", "PostgreSQL performance", "Datadog investigation", "Production incident",
          "Security / vulnerability remediation", "CI/CD", "AWS/Azure migration", "A difficult bug you solved"] },
        { date: "2026-10-30", title: "Final mock interview", items: [
          "Round 1 — Coding (45–60 min)", "Round 2 — Java/Spring (45 min)", "Round 3 — System Design (60 min)",
          "Round 4 — DevOps/Kubernetes (45 min)", "Round 5 — Project discussion (45 min)",
          "Write final weak-topic list"] }
      ]
    }
  ],

  topics: [
    { id: "java", title: "Java", p: "P0", items: ["OOP", "SOLID", "Collections", "HashMap internals", "equals/hashCode",
      "String", "Immutable objects", "Java 8+", "Streams", "Optional", "Generics", "Exception handling",
      "Multithreading", "synchronized", "volatile", "Locks", "ExecutorService", "CompletableFuture", "JVM", "GC",
      "Memory", "Profiling"] },
    { id: "spring", title: "Spring Boot", p: "P0", items: ["IoC", "DI", "Beans", "Bean lifecycle", "Auto configuration",
      "Spring Boot", "REST", "Validation", "Exception handling", "Actuator", "Profiles", "Spring Data", "JPA",
      "Hibernate", "Transactions", "Isolation", "Propagation", "Lazy/Eager", "N+1", "Security"] },
    { id: "micro", title: "Microservices", p: "P0", items: ["Service boundaries", "REST", "Feign", "API Gateway",
      "Service discovery", "Load balancing", "Retry", "Timeout", "Circuit breaker", "Bulkhead", "Rate limiting",
      "Saga", "Idempotency", "Event-driven architecture", "Distributed transactions", "Eventual consistency"] },
    { id: "sd", title: "System Design", p: "P0", items: ["Scalability", "Availability", "Reliability", "CAP", "Caching",
      "Database scaling", "Load balancing", "Queues", "Kafka", "Rate limiter", "Notification system",
      "URL shortener", "Order system", "API design"] },
    { id: "kafka", title: "Kafka", p: "P1", items: ["Broker", "Topic", "Partition", "Offset", "Consumer group",
      "Replication", "Ordering", "Consumer lag", "Rebalancing", "Ack", "Delivery semantics", "Retry", "DLQ",
      "Idempotency", "Schema evolution"] },
    { id: "db", title: "Database", p: "P1", items: ["SQL", "Joins", "CTE", "Window functions", "Indexes", "Query plans",
      "Transactions", "ACID", "Isolation", "Locks", "PostgreSQL", "Cosmos DB", "Connection pooling"] },
    { id: "devops", title: "DevOps", p: "P1", items: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Terraform",
      "Azure", "AWS", "AKS", "EKS", "ACR", "IAM/RBAC", "Secrets", "Deployment strategies", "Monitoring",
      "Datadog", "Logging", "Alerting"] },
    { id: "k8s", title: "Kubernetes", p: "P1", items: ["Pod", "Deployment", "ReplicaSet", "Service", "Ingress",
      "Gateway", "ConfigMap", "Secret", "RBAC", "Requests/limits", "HPA", "Probes", "Scheduling",
      "Troubleshooting", "Networking", "DNS"] },
    { id: "sec", title: "Security", p: "P2", items: ["Authentication", "Authorization", "JWT", "OAuth2", "OIDC",
      "mTLS", "TLS", "Secrets management", "OWASP basics", "Dependency vulnerabilities"] }
  ]
};
