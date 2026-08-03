export type SecurityTestMode = 'normal' | 'payload' | 'search';
export type SecurityPayloadCategory = 'all' | 'sql' | 'xss' | 'cmd' | 'path' | 'headers' | 'slow' | 'redos' | 'template' | 'hash';

export interface SecurityPayloadDefinition {
  id: string;
  category: SecurityPayloadCategory;
  name: string;
  pattern: string;
  description: string;
}

export const SECURITY_PAYLOADS: SecurityPayloadDefinition[] = [
  {
    id: 'sql_1',
    category: 'sql',
    name: 'SQLi Boolean Bypass',
    pattern: "' OR '1'='1' --",
    description: 'Classic authentication bypass via SQL tautology'
  },
  {
    id: 'sql_2',
    category: 'sql',
    name: 'SQLi Union Enumeration',
    pattern: "1 UNION SELECT null, version(), user() --",
    description: 'Database version and schema extraction probe'
  },
  {
    id: 'xss_1',
    category: 'xss',
    name: 'XSS Script Execution',
    pattern: "<script>alert(document.cookie)</script>",
    description: 'Reflected cross-site scripting script injection'
  },
  {
    id: 'xss_2',
    category: 'xss',
    name: 'XSS Event Handler',
    pattern: "<img src=x onerror=alert('WAF_TEST')>",
    description: 'Image attribute XSS payload bypassing simple filters'
  },
  {
    id: 'cmd_1',
    category: 'cmd',
    name: 'Command Injection Pipe',
    pattern: "; cat /etc/passwd",
    description: 'OS command execution via shell chaining'
  },
  {
    id: 'cmd_2',
    category: 'cmd',
    name: 'Command Injection Ampersand',
    pattern: "& ping -c 3 127.0.0.1 &",
    description: 'ICMP ping flood via command injection'
  },
  {
    id: 'path_1',
    category: 'path',
    name: 'Path Traversal Unix',
    pattern: "../../../../etc/passwd%00",
    description: 'Directory traversal accessing sensitive system files'
  },
  {
    id: 'path_2',
    category: 'path',
    name: 'Path Traversal Windows',
    pattern: "..\\..\\..\\..\\windows\\win.ini",
    description: 'Windows INI configuration file traversal'
  },
  {
    id: 'headers_1',
    category: 'headers',
    name: 'Large Header Flood',
    pattern: "A".repeat(4096),
    description: 'Buffer overflow / memory exhaustion via oversized header'
  },
  {
    id: 'slow_1',
    category: 'slow',
    name: 'Slowloris Header Trick',
    pattern: "X-Slow-Header: incomplete-chunked-data",
    description: 'Slow connection keep-alive timeout starvation'
  },
  {
    id: 'redos_1',
    category: 'redos',
    name: 'ReDoS Catastrophic Backtracking',
    pattern: "^([a-zA-Z]+)*$",
    description: 'Regular expression denial of service exponential CPU load'
  },
  {
    id: 'template_1',
    category: 'template',
    name: 'SSTI Expression',
    pattern: "${7*7} {{7*7}}",
    description: 'Server-Side Template Injection mathematical evaluation'
  },
  {
    id: 'hash_1',
    category: 'hash',
    name: 'Hash Collision Payload',
    pattern: "AQ==&__proto__[polluted]=true",
    description: 'JSON prototype pollution and hash collision vector'
  }
];

export interface SecurityStats {
  totalTestRequests: number;
  blockedRequests: number;
  allowedRequests: number;
  testTypeCounts: Record<string, number>;
  blockedByType: Record<string, number>;
}
